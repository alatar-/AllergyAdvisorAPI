define({ "api": [
  {
    "type": "post",
    "url": "/products",
    "title": "Save new product",
    "name": "AddProduct",
    "group": "Products",
    "version": "0.0.0",
    "filename": "./src/versions/1.0.js",
    "groupTitle": "Products"
  },
  {
    "type": "get",
    "url": "/products",
    "title": "Get all products",
    "name": "GetAllProducts",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>search query for products matching the name pattern</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3531/products?name=Nutell"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of products.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n         \"name\" : \"Nutella\", \n         \"producer\" : \"Ferrero\", \n         \"description\" : null, \n         \"allergens\" : [ \n             { \n                 \"name\" : \"Orzechy laskowe\", \n                 \"positive_votes\" : 121, \n                 \"negative_votes\" : 2 \n             } \n         ] \n     },\n     ...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Server internal error.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"message\": \"Internal error\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/versions/1.0.js",
    "groupTitle": "Products"
  },
  {
    "type": "get",
    "url": "/products/:id",
    "title": "Get product",
    "name": "GetProduct",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>Object id</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3531/products/554b183fa4a09606941e53bb"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "product",
            "description": "<p>Single product object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"name\" : \"Nutella\", \n     \"producer\" : \"Ferrero\", \n     \"description\" : null, \n     \"allergens\" : [ \n         { \n             \"name\" : \"Orzechy laskowe\", \n             \"positive_votes\" : 121, \n             \"negative_votes\" : 2 \n         } \n     ] \n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Wrong id formatting, see example.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Server internal error.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Bad request\n{\n  \"message\": \"Wrong id formatting\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/versions/1.0.js",
    "groupTitle": "Products"
  }
] });