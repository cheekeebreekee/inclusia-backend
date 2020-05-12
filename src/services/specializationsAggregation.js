const NodeCache = require('node-cache');
const axios = require('axios');
const SpecializationModel = require('../models/specialization');
const { mapAsync } = require('../utils');

const cache = new NodeCache({
  stdTTL: 1728000, // 20 days in seconds
  checkperiod: 3600 // 1 hour in seconds
})

async function getCoords(locality, adds) {
  const address = `Беларусь, ${locality}, ${adds}`;

  if (!cache.has(address)) {
    const geocoderResult = await axios({
      method: 'GET',
      url: process.env.GEOCODER_ENDPOINT_URL,
      params: {
        geocode: address,
        apikey: process.env.YANDEX_API_KEY,
        format: 'json',
        results: 1,
        lang: 'ru_BY',
      }
    })

    cache.set(address, geocoderResult.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos);
  }

  return cache.get(address);
}

module.exports = {
  async aggregate(req, res, next) {
    let result;

    try {
      result = await SpecializationModel.find()
        .populate('specialityId')
        .populate('graduationLevelId')
        .populate({
          path: 'institutionId',
          populate: {
            path: 'localityId',
          }
        })
        .populate('eligibleDiseasesIdList');
    } catch (err) {
      next(err);
      return;
    }

    try {
      res.json(await mapAsync(result, async (data) => ({
        title: data.title,
        description: data.description,
        imageUrl: data.imageURL,
        graduationLevel: data.graduationLevelId.name,
        isBarrierFreeEnvironment: data.isBarrierFreeEnvironment,
        isRemoteEducationAvailable: data.isRemoteEducationAvailable,
        institution: {
          name: data.institutionId.name,
          coords: await getCoords(result[0].institutionId.localityId.name, result[0].institutionId.address),
          locality: data.institutionId.localityId.name,
          contacts: {
            phone: data.institutionId.tel,
          }
        }
      })));
    } catch(e) {
      next(e);
    }
  }
}