import { type Pokemon } from "../../types/types.js";
import Component from "../Component/Component.js";

class PokemonInfoComponent extends Component {
  constructor(parentElement: Element, private readonly pokemon: Pokemon) {
    const tag = "main";
    const className = "pokemon";
    super(parentElement, tag, className);
  }

  render() {
    this.parentElement.append(this.element);

    const pokemonAbilitiesListItemElements = this.pokemon.abilities
      .map((ability) => {
        const pokemonAbilityListItemElement = `
      <li>
        <span>${ability.nameAbility.toUpperCase()} ${
          ability.visibilityAbility ? "visible" : "hidden"
        }</span>
      </li>
      `;
        return pokemonAbilityListItemElement;
      })
      .join("\n");

    this.element.innerHTML = `
    <div class="pokemon__picture">
      <img src="${
        this.pokemon.imageUrl
      }" width="96" height="96" alt="A picture of ${this.pokemon.name}">
    </div>
    <div class="pokemon__name">
      <h2>${this.pokemon.name.toUpperCase()}</h2>
    </div>
    <div class="pokemon__abilities">
      <h2>Abilities</h2>
      <ul>
        ${pokemonAbilitiesListItemElements}
      </ul>
    </div>
    <div class="pokemon__combat-state">
      <h2>Combat only?</h2>
      <span>${this.pokemon.combatOnly ? "YES" : "NO"}</span>
    </div>
    <div class="pokemon__back">
      <h2>Back</h2>
        <img src="${
          this.pokemon.backImageUrl
        }" width="96" height="96" alt="A picture of the back of ${
      this.pokemon.name
    }">
    </div>
    `;
  }
}

export default PokemonInfoComponent;