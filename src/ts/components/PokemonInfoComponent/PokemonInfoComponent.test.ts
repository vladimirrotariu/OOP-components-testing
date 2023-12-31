import { type Ability, type Pokemon } from "../../types/types";
import PokemonInfoComponent from "./PokemonInfoComponent.js";

describe("Given a PokemonInfoComponent component", () => {
  describe("When it is given a picture with the pokemon Bulbasaur", () => {
    test("Then it shows a picture with the pokemon Bulbasaur", () => {
      const containerElement = document.createElement("div");
      const pictureBulbasaurUrl =
        "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png";
      const bulbasaur: Pokemon = {
        name: "",
        abilities : [{ nameAbility : "", visibilityAbility : true}],
        imageUrl : pictureBulbasaurUrl,
        backImageUrl : ""
      };

      const pokemonInfoComponent = new PokemonInfoComponent(
        containerElement,
        bulbasaur
      );
      pokemonInfoComponent.render();
      const pokemonPictureElement: HTMLImageElement =
        containerElement.querySelector(".pokemon__picture > *")!;
      const pokemonPictureUrl: string = pokemonPictureElement.src;

      expect(pokemonPictureUrl).toStrictEqual(pictureBulbasaurUrl);
    });
  });

  describe("When it is given the name of the pokemon 'charmander'", () => {
    test("Then it shows the name 'CHARMANDER'", () => {
      const containerElement = document.createElement("div");
      const namePokemon = "CHARMANDER";
      const charmander: Pokemon = {
        name: namePokemon,
        abilities : [{ nameAbility : "", visibilityAbility : true}],
        imageUrl: "",
        backImageUrl: ""
      };

      const pokemonInfoComponent = new PokemonInfoComponent(
        containerElement,
        charmander
      );
      pokemonInfoComponent.render();
      const pokemonHeadingElement =
        containerElement.querySelector(".pokemon__name > *")!;
      const pokemonNameHeading: string = pokemonHeadingElement.textContent!;

      expect(pokemonNameHeading).toStrictEqual(namePokemon);
    });
  });

  describe("When it is given the pokemon's abilities 'firebreath' and 'flying', the first visible and the second hidden", () => {
    test("Then it shows the pokemon's abilities 'firebreath' and 'flying', as well as that the first is visible and the second hidden", () => {
      const containerElement = document.createElement("div");
      const abilityPokemonFire: Ability = {
        nameAbility: "firebreath",
        visibilityAbility: true,
      };
      const abilityPokemonFly: Ability = {
        nameAbility: "flying",
        visibilityAbility: false,
      };
      const abilitiesPokemon: Ability[] = [
        abilityPokemonFire,
        abilityPokemonFly,
      ];
      const charmander: Pokemon = {
        name: "",
        abilities: abilitiesPokemon,
        imageUrl: "",
        backImageUrl: ""
      };

      const pokemonInfoComponent = new PokemonInfoComponent(
        containerElement,
        charmander
      );
      pokemonInfoComponent.render();
      const pokemonAbilitiesElements = containerElement.querySelectorAll(
        ".pokemon__abilities span"
      )!;
      const pokemonFireAbilityComponent: string =
        pokemonAbilitiesElements[0].textContent!;
      const pokemonFlyAbilityComponent: string =
        pokemonAbilitiesElements[1].textContent!;

      expect(pokemonFireAbilityComponent.slice(0,17)).toStrictEqual(
        abilityPokemonFire.nameAbility.toUpperCase() + " hidden"
      );
      expect(pokemonFlyAbilityComponent.slice(0,14)).toStrictEqual(
        abilityPokemonFly.nameAbility.toUpperCase() + " visible"
      );
    });
  });

  describe("When it is given a picture with the back of pokemon Bulbasaur", () => {
    test("Then it shows a picture with the back pokemon Bulbasaur", () => {
      const containerElement = document.createElement("div");
      const pictureBulbasaurBackUrl =
        "https://www.pngmart.com/files/12/Pokemon-Bulbasaur-PNG-Pic.png";
      const bulbasaur: Pokemon = {
        name: "",
        abilities : [{ nameAbility : "", visibilityAbility : true}],
        imageUrl: "",
        backImageUrl: pictureBulbasaurBackUrl
      };

      const pokemonInfoComponent = new PokemonInfoComponent(
        containerElement,
        bulbasaur
      );
      pokemonInfoComponent.render();
      const pokemonBackPictureElement: HTMLImageElement =
        containerElement.querySelector(".pokemon__back > img")!;
      const pokemonBackPictureUrl: string = pokemonBackPictureElement.src;

      expect(pokemonBackPictureUrl).toStrictEqual(pictureBulbasaurBackUrl);
    });
  });
});
