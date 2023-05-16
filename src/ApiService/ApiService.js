import axios from "axios";
const GetHeaderData = async function () {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
};

export const PostApi = {
  postcall: async (data, url) => {
    let response = null;
    const config = await GetHeaderData();
    try {
      response = await axios.post(url, data, config);
    } catch (e) {
      response = e;
    }

    return response;
  },
};

export const GetApi = {
  getcall: async (data, url) => {
    let response = null;
    const config = await GetHeaderData();
    let _data = {
      data: data,
    };
    try {
      response = await axios.get(url, _data, config);
    } catch (e) {
      response = e;
    }

    return response;
  },

  getParamCall: async (url) => {
    let response = null;
    const config = await GetHeaderData();
    try {
      response = await axios.get(url, config);
    } catch (e) {
      response = e;
    }

    return response;
  },
};
