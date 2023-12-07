const mdLinks = require("../index.js");

describe("mdLinks", () => {
  it("Deveria retornar links extraidos sem validação quando validate for false", () => {
    return mdLinks("./readHere.md", { validate: true }).then((links) => {
      expect(links).toStrictEqual([
        {
          href: "https://pt.wikipedia.org/wiki/Markdownhttps://www.crunchyroll.com/pt-br/series/GRDV0019R/jujutsu-kaisen",
          text: "Meu anime preferido",
          file: "./oneFile.md",
          status: "200",
          ok: "ok",
        },
        {
          href: "https://www.sleep-token.com",
          text: "Minha banda preferida",
          file: "./oneFile.md",
          status: "200",
          ok: "ok",
        },
        {
          href: "https://pt.wikipedia.org/wiki/heuehehuehuheuheu",
          text: "Um link quebrado",
          file: "./oneFile.md",
          status: "200",
          ok: "ok",
        },
      ]);
    });
  });
});

it("Deveria retornar links extraidos sem validação quando validate for false", () => {
  return mdLinks("./readHere.md", { validate: true }).then((links) => {
    expect(links).toStrictEqual([
      {
        href: "https://pt.wikipedia.org/wiki/Markdownhttps://www.crunchyroll.com/pt-br/series/GRDV0019R/jujutsu-kaisen",
        text: "Meu anime preferido",
        file: "./oneFile.md",
        status: "200",
        ok: "ok",
      },
      {
        href: "https://www.sleep-token.com",
        text: "Minha banda preferida",
        file: "./oneFile.md",
        status: "200",
        ok: "ok",
      },
      {
        href: "https://pt.wikipedia.org/wiki/heuehehuehuheuheu",
        text: "Um link quebrado",
        file: "./oneFile.md",
        status: "200",
        ok: "ok",
      },
    ]);
  });
});


it("deveria reornar links extraidos com validação quando validate for true", () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      status: 200,
    })
  );
});
