const { mdLinks } = require("../index.js");

describe("mdLinks", () => {
  it("Deveria retornar links extraídos sem validação quando validate for false", () => {
    return mdLinks("./readHere.md", { validate: false }).then((links) => {
      expect(links).toStrictEqual([
        {
          href: "https://pt.wikipedia.org/wiki/Markdownhttps://www.crunchyroll.com/pt-br/series/GRDV0019R/jujutsu-kaisen",
          text: "Jujutsu Kaisen",
          file: "./readHere.md",
        },
        {
          href: "https://www.sleep-token.com",
          text: "Sleep Token",
          file: "./readHere.md",
        },
        {
          href: "https://pt.wikipedia.org/wiki/heuehehuehuheuheu",
          text: "Quebrou",
          file: "./readHere.md",
        },
      ]);
    });
  });

  it("Deveria retornar links extraídos com validação quando validate for true", () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
      }));

    return mdLinks("./readHere.md", { validate: true }).then((links) => {
      expect(links).toStrictEqual([
        {
          href: "https://pt.wikipedia.org/wiki/Markdownhttps://www.crunchyroll.com/pt-br/series/GRDV0019R/jujutsu-kaisen",
          text: "Jujutsu Kaisen",
          file: "./readHere.md",
          status: 200,
          ok: "Ok",
        },
        {
          href: "https://www.sleep-token.com",
          text: "Sleep Token",
          file: "./readHere.md",
          status: 200,
          ok: "Ok",
        },
        {
          href: "https://pt.wikipedia.org/wiki/heuehehuehuheuheu",
          text: "Quebrou",
          file: "./readHere.md",
          status: 200,
          ok: "Ok",
        },
      ]);
    });
  });

  it("Deveria retornar links extraídos com validação quando validate for true", () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 404,
      })
    );

    return mdLinks("./readHere.md", { validate: true }).then((links) => {
      expect(links).toStrictEqual([
        {
          href: "https://pt.wikipedia.org/wiki/Markdownhttps://www.crunchyroll.com/pt-br/series/GRDV0019R/jujutsu-kaisen",
          text: "Jujutsu Kaisen",
          file: "./readHere.md",
          status: 404,
          ok: "Fail",
        },
        {
          href: "https://www.sleep-token.com",
          text: "Sleep Token",
          file: "./readHere.md",
          status: 404,
          ok: "Fail",
        },
        {
          href: "https://pt.wikipedia.org/wiki/heuehehuehuheuheu",
          text: "Quebrou",
          file: "./readHere.md",
          status: 404,
          ok: "Fail",
        },
      ]);
    });
  });

  it("Deveria retornar links extraídos sem validação quando validate for false (erro de validação)", () => {
    global.fetch = jest.fn(() => Promise.reject({}));

    return mdLinks("./readHere.md", { validate: false }).then((links) => {
      expect(links).toStrictEqual([
        {
          href: "https://pt.wikipedia.org/wiki/Markdownhttps://www.crunchyroll.com/pt-br/series/GRDV0019R/jujutsu-kaisen",
          text: "Jujutsu Kaisen",
          file: "./readHere.md",
        },
        {
          href: "https://www.sleep-token.com",
          text: "Sleep Token",
          file: "./readHere.md",
        },
        {
          href: "https://pt.wikipedia.org/wiki/heuehehuehuheuheu",
          text: "Quebrou",
          file: "./readHere.md",
        },
      ]);
    });
  });
});
