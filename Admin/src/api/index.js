export const staging_url = "http://localhost:3000/api";
export const staging_base_url = "http://localhost:3000/api";

export const postRequestLogin = async (url, body) => {
  console.log(staging_url + url)
  console.log(JSON.stringify(body))
  try {
    const response = await fetch(`${staging_url}${url}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const postRequest = async (url, body) => {
  try {
    const response = await fetch(`${staging_url}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body),
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const postFormRequest = async (url, body) => {
  try {
    const response = await fetch(`${staging_url}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: JSON.stringify(body),
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};
export const postRequestWithHeader = async (url) => {
  try {
    const response = await fetch(`${staging_url}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const getRequest = async (url) => {
  try {
    const updatedUrl = `${staging_url}${url}`;
    const response = await fetch(updatedUrl, {
      headers: {
        "Content-type": "application/json"
      },
    });
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const getRequestWithParams = async (url, params) => {
  try {
    const response = await fetch(`${staging_url}${url}${params}`, {
      headers: {
        "Content-type": "application/json"
      },
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const deleteRequest = async (url) => {
  try {
    const response = await fetch(`${staging_url}${url}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      },
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const deleteRequestWithBody = async (url, body) => {
  try {
    const response = await fetch(`${staging_url}${url}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(body),
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const putRequestWithHeadersParams = async (url, params) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(params),
  };
  try {
    const response = await fetch(`${staging_url}${url}`, requestOptions);
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const generatePreSignedUrl = async (body) => {
  try {
    const response = await fetch(
      `${staging_base_url}/s3_uploads/generate_presigned_url`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const uploadImageToS3 = async (payload) => {
  try {
    const response = await fetch(`${payload.url}`, {
      method: "PUT",
      headers: {
        "Content-MD5": `${payload.checksum}`,
        "Content-Type": `${payload.file_type}`,
      },
      body: payload.file,
    });
    return response.status;
  } catch (err) {
    console.log(err);
    return {
      status: err.status,
      data: err.response,
    };
  }
};
