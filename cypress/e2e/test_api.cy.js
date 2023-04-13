/// <reference types="cypress" />

describe("httpbin tests", () => {
  describe("response code", () => {
    it("should be 404", () => {
      const request = {
        url: "https://httpbin.org/non-existing-url",
        failOnStatusCode: false,
      };

      cy.request(request).then((response) => {
        assert.equal(404, response.status);
      });
    });

    it("should be 200", () => {
      const request = {
        method: "POST",
        url: "https://httpbin.org/post",
        failOnStatusCode: false,
      };

      cy.request(request).then((response) => {
        assert.equal(200, response.status);
      });
    });

    it("should be 405", () => {
      const request = {
        method: "GET",
        url: "https://httpbin.org/post",
        failOnStatusCode: false,
      };

      cy.request(request).then((response) => {
        assert.equal(405, response.status);
      });
    });
  });

  describe("response body", () => {
    const queryData = {
      key: "my-value",
    };

    const bodyData = {
      bodyKey: "bodyValue",
    };

    it(`should have arguments key value to equal ${queryData.key}`, () => {
      const request = {
        url: "https://httpbin.org/get",
        qs: queryData,
        failOnStatusCode: false,
      };

      cy.request(request).then((response) => {
        assert.equal(200, response.status);
        assert.equal(queryData.key, response.body.args.key);
      });
    });

    it(`should have data to not strictly equal ${JSON.stringify(
      bodyData
    )}`, () => {
      const request = {
        method: "POST",
        url: "https://httpbin.org/post",
        body: bodyData,
        failOnStatusCode: false,
      };

      cy.request(request).then((response) => {
        assert.equal(200, response.status);
        assert.notStrictEqual(bodyData, response.body.data);
      });
    });
  });

  describe("response headers", () => {
    it("should have custom header set correctly", () => {
      const request = {
        method: "GET",
        url: "https://httpbin.org/headers",
        headers: {
          customHeader: "customValue",
        },
        failOnStatusCode: false,
      };

      cy.request(request).then((response) => {
        assert.equal(200, response.status);
        assert.equal("customValue", response.requestHeaders.customHeader);
      });
    });

    it('should have "user-agent" header set correctly', () => {
      const userAgent =
        "Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion";

      const request = {
        method: "GET",
        url: "https://httpbin.org/headers",
        headers: {
          "user-agent": userAgent,
        },
        failOnStatusCode: false,
      };

      cy.request(request).then((response) => {
        assert.equal(200, response.status);
        assert.equal(userAgent, response.requestHeaders["user-agent"]);
      });
    });

    it('should have "Cookie" header to equal "cookieName=cookieValue"', () => {
      const request = {
        method: "GET",
        url: "https://httpbin.org/headers",
        headers: {
          "Set-Cookie": "cookieName=cookieValue",
        },
        failOnStatusCode: false,
      };

      cy.request(request).then((response) => {
        assert.equal(200, response.status);
        assert.equal(
          "cookieName=cookieValue",
          response.requestHeaders["Set-Cookie"]
        );
      });
    });
  });

  it("response duration should be less 150ms", () => {
    const request = {
      url: "https://httpbin.org/image/svg",
      failOnStatusCode: false,
    };

    cy.request(request).then((response) => {
      assert.isTrue(response.duration < 150);
    });
  });

  it("accepts random ids", () => {
    for (let i = 0; i < 10; i++) {
      const randomId = Math.floor(Math.random() * 100000000);

      const request = {
        url: "https://httpbin.org/headers",
        id: randomId,
      };

      cy.request(request).then((response) => {
        assert.isTrue(response.status == 200);
      });
    }
  });
});
