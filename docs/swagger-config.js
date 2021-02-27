var spec =
{
    "openapi": "3.0.0",
    "info": {
      "version": "1.0.0",
      "title": "Amazon Review Scrapper",
      "description": "Restful-Flask webservice to return sentiment analysis and filtered reviews from an amazon product page."
    },
    "paths": {
      "http://localhost:5000/review": {
        "get": {
          "tags": [
            "list reviews"
          ],
          "description": "returns filtered reviews using color, style and rating.",
          "parameters": [
            {
              "in": "query",
              "name": "color",
              "required": true,
              "description": "product's color",
              "schema": {
                "type": "string",
                "example": "Black"
              }
            },
            {
              "in": "query",
              "name": "style",
              "required": true,
              "description": "product's storage size",
              "schema": {
                "type": "string",
                "example": "64GB"
              }
            },
            {
              "in": "query",
              "name": "rating",
              "required": true,
              "description": "product's rating",
              "schema": {
                "type": "string",
                "example": 4
              }
            }
          ],
          "responses": {
            "200": {
              "description": "success",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": {
                      "title": "Good phone",
                      "body": "Totally worth the price! :)",
                      "color": "RED",
                      "style": "64GB",
                      "rating": "4",
                      "purchased": "Y"
                    }
                  }
                }
              }
            },
            "404": {
              "description": "failure",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": {
                      "message": "reviews not found"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "http://localhost:5000/sentiment": {
        "get": {
          "tags": [
            "list recent sentiment"
          ],
          "description": "returns the sentiment polarity of the recent review.",
          "responses": {
            "200": {
              "description": "success",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": {
                      "title": "Good phone",
                      "sentiment": "positive"
                    }
                  }
                }
              }
            },
            "404": {
              "description": "failure",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": {
                      "message": "sentiments not found"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }