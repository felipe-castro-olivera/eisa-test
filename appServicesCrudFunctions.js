//GET ALL EMPLOYEES
exports = async function () {
  const response = await context.http.get({
    url: "https://crudapi.co.uk/api/v1/employees",
    headers: {
      "Content-Type": ["application/json"],
      Authorization: [
        "Bearer wCGQeNSDMEoz0JITBLeJfAt1lsGxO6Bt8w3B1ai-mTjPC7FZTQ",
      ],
    },
  });

  return EJSON.parse(response.body.text());
};

//ADD EMPLOYEE
exports = async function addEmployee(request, response) {
  try {
    if (request.body === undefined) {
      throw new Error(`Request body was not defined.`);
    }
    const body = JSON.parse(request.body.text());
    const respuesta = await context.http.post({
      url: `https://crudapi.co.uk/api/v1/employees`,
      body: [
        {
          name: body.firstName + " " + body.lastName,
          role: body.role,
          status: "Active",
          image: "",
        },
      ],
      encodeBodyAsJSON: true,
      headers: {
        "Content-Type": ["application/json"],
        Authorization: [
          "Bearer wCGQeNSDMEoz0JITBLeJfAt1lsGxO6Bt8w3B1ai-mTjPC7FZTQ",
        ],
      },
    });

    response.setStatusCode(201);
    return JSON.parse(respuesta.body.text());
  } catch (error) {
    response.setStatusCode(400);
    response.setBody(error.message);
  }
};

//DELETE AN EMPLOYEE
exports = async function deleteEmployee(request, response) {
  try {
    if (request.query === undefined) {
      throw new Error(`Request body was not defined.`);
    }
    const { id } = request.query;
    console.log("ID>", id);

    const respuesta = await context.http.delete({
      url: `https://crudapi.co.uk/api/v1/employees/${id}`,
      headers: {
        "Content-Type": ["application/json"],
        Authorization: [
          "Bearer wCGQeNSDMEoz0JITBLeJfAt1lsGxO6Bt8w3B1ai-mTjPC7FZTQ",
        ],
      },
    });

    response.setStatusCode(201);

    response.setBody(
      JSON.stringify({
        respuesta,
      })
    );
  } catch (error) {
    response.setStatusCode(400);
    response.setBody(error.message);
  }
};

//GET ALL ROLES
exports = async function () {
  const response = await context.http.get({
    url: "https://crudapi.co.uk/api/v1/roles",
    headers: {
      "Content-Type": ["application/json"],
      Authorization: [
        "Bearer wCGQeNSDMEoz0JITBLeJfAt1lsGxO6Bt8w3B1ai-mTjPC7FZTQ",
      ],
    },
  });

  return EJSON.parse(response.body.text());
};
