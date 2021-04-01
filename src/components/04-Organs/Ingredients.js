import React from 'react';

import { StringUtil } from '../../util/StringUtil';

import { InfoContainer } from '../../';

import './Ingredients.scss';

// Over time, this will need to be migrated to something that has more logic.
// In other words, a user should be able to configure what possible 'subphases'
// he/she wants to be able to add ingredients to within a recipe.

// NOTE: This is indexed by beer style.
const ingredientSubPhases = {
  'allGrain': [
    'Water Conditioning',
    'Mash',
    'Boil',
    'Primary Fermentation',
    'Secondary Fermentation',
    'Aging',
    'Packaging'
  ],
  'partialMash': [
    'Water Conditioning',
    'Mash',
    'Boil',
    'Primary Fermentation',
    'Secondary Fermentation',
    'Aging',
    'Packaging'
  ],
  'extract' : [
    'Boil',
    'Primary Fermentation',
    'Secondary Fermentation',
    'Aging',
    'Packaging'
  ]
};

export class PrimaryFermentationIngredient extends React.PureComponent {
  render() {
    let attenuation = this.props.attenuation ? (this.props.attenuation * 100).toFixed(2) + "%" : "N/A";
    let strain = this.props.strain ? this.props.strain : "N/A";

    return (
      <React.Fragment>
        <div>{StringUtil.convertToTitleCase(this.props.type)}</div>
        <div>{this.props.manufacturer}</div>
        <div>{strain}</div>
        <div>{this.props.description}</div>
        <div>{attenuation}</div>
      </React.Fragment>
    );
  }
}

export class BoilIngredient extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div>{this.props.amount}</div>
        <div>{this.props.description}</div>
        <div>{this.props.manufacturer}</div>
        <div>{this.props.alphaAcid}</div>
        <div>{StringUtil.convertToTitleCase(this.props.kind)}</div>
      </React.Fragment>
    );
  }
}

export class MashIngredient extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div>{this.props.amount}</div>
        <div>{this.props.description}</div>
        <div>{this.props.maltster}</div>
        <div>{this.props.color}</div>
        <div>{this.props.origin}</div>
      </React.Fragment>
    );
  }
}

export class Ingredients extends React.PureComponent {
  constructor(props) {
    super(props);

    this.buildActionsForBrewMethod = this.buildActionsForBrewMethod.bind(this);

    let actions = this.buildActionsForBrewMethod(props.brewMethodType);
    this.state = {
      ingredients: props.ingredients,
      headerButton: {
        id: 'addIngredientButton',
        title: "Add Ingredient",
        actions: actions
      }
    };
  }

  buildActionsForBrewMethod(brewMethodType) {
    let actions = [];
    for (let subPhaseIdx in ingredientSubPhases[brewMethodType]) {
      let subPhase = ingredientSubPhases[brewMethodType][subPhaseIdx];
      actions.push({
        title: `Add ${subPhase} Ingredient`,
        id: `ingredientHeader-add${subPhase.replace(' ', '')}Ingredient`
      });
    }

    return actions;
  }

  render() {
    return (
      <InfoContainer title="Ingredients" headerButton={this.state.headerButton}>
        <IngredientSet ingredients={this.state.ingredients} phase="mash" />
        <IngredientSet ingredients={this.state.ingredients} phase="boil" />
        <IngredientSet ingredients={this.state.ingredients} phase="primaryFermentation" />
      </InfoContainer>
    );
  }
}

export class IngredientHeader extends React.PureComponent {
  constructor(props) {
    super(props);

    let columns = [];
    if (props.phase === 'mash') {
      columns.push('Amount');
      columns.push('Description');
      columns.push('Maltster/Manufacturer');
      columns.push('Color (°L)');
      columns.push('Country of Origin');
    } else if (props.phase === 'boil') {
      columns.push('Amount');
      columns.push('Description');
      columns.push('Manufacturer');
      columns.push('Alpha Acid (%)');
      columns.push('Kind');
    } else if (props.phase === 'primaryFermentation') {
      columns.push('Type');
      columns.push('Manufacturer');
      columns.push('Strain');
      columns.push('Description');
      columns.push('Attenuation');
    }

    this.state = {
      headers: columns
    };
  }

  render() {
    let headerRow = [];
    for (let headerIdx in this.state.headers) {
      let header = this.state.headers[headerIdx];
      headerRow.push((<div key={`ingredientHeader-${this.props.phase}-${headerIdx}`} className="ingredientSet-legend">{header}</div>));
    }

    return (
      <React.Fragment>
        {headerRow}
      </React.Fragment>
    );
  }
}

export class IngredientSet extends React.PureComponent {
  constructor(props) {
    super(props);

    let title = StringUtil.convertToTitleCase(props.phase.replace(/([a-z])([A-Z])/g, '$1 $2'));
    this.state = {
      phase: props.phase,
      ingredients: props.ingredients,
      phaseTitle: title
    };
  }

  getAmountAbbreviation (ingredient) {
    let amountUnit = '#';
    if (ingredient.amountUnit === 'pounds') {
      amountUnit = '#';
    } else if (ingredient.amountUnit === 'ounces') {
      amountUnit = 'oz';
    } else if (ingredient.amountUnit === 'kilograms') {
      amountUnit = 'kg';
    } else if (ingredient.amountUnit === 'grams') {
      amountUnit = 'g';
    }

    return amountUnit;
  }

  getIngredientList(phase) {
    let ingredientList = [];

    for (let nextIngredientIdx in this.state.ingredients[phase]) {
      let ingredient = this.state.ingredients[phase][nextIngredientIdx];

      let amountUnit = this.getAmountAbbreviation(ingredient);
      let amountWithUnit = `${ingredient.amount}${amountUnit}`;

      let manufacturer = ingredient.maltster || ingredient.manufacturer;
      if (!manufacturer) {
        manufacturer = 'Any';
      }

      if (phase === 'mash') {
        let origin = ingredient.origin;
        if (!origin) {
          origin = 'Any';
        }

        ingredientList.push((
          <MashIngredient key={`mashIngredient-${nextIngredientIdx}`} maltster={manufacturer} amount={amountWithUnit} description={ingredient.description} color={ingredient.color} origin={origin} />
        ));
      } else if (phase === 'boil') {
        let kind = 'Additive';

        if (ingredient.type === 'hops') {
          kind = `${StringUtil.convertToTitleCase(ingredient.kind)} ${StringUtil.convertToTitleCase(ingredient.type)}`;
        }

        ingredientList.push((
          <BoilIngredient key={`boilIngredient-${nextIngredientIdx}`} manufacturer={manufacturer} amount={amountWithUnit} description={ingredient.description} alphaAcid={ingredient.alphaAcid} kind={kind} />
        ));
      } else if (phase === 'primaryFermentation') {
        ingredientList.push((
          <PrimaryFermentationIngredient key={`primaryFermentationIngredient-${nextIngredientIdx}`} type={ingredient.type} manufacturer={manufacturer} description={ingredient.description} attenuation={ingredient.attenuation} strain={ingredient.strain} />
        ));
      }
    }

    return ingredientList;
  }

  render() {
    let ingredientList = this.getIngredientList(this.props.phase);

    return (
      <div className={`ingredientSet ingredientSet-${this.props.phase}`}>
        <div className="ingredientSet-phase">
          <div className="dummySpace" />
          <div className="ingredientSet-phaseName">{this.state.phaseTitle}</div>
          <div className="dummySpace" />
        </div>
        <div className="ingredientSet-inner">
          <IngredientHeader phase={this.props.phase} />
          { ingredientList }
        </div>
      </div>
    );
  }
}
