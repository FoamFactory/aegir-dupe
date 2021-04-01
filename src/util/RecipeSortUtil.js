import { DateTime } from 'luxon';

export class RecipeSortUtil {
  static sortMethods = null;

  static getRecipeSortMethods() {
    if (!RecipeSortUtil.sortMethods) {
      RecipeSortUtil.sortMethods = [];

      for (let recipeIdx in RECIPE_SORT_METHODS) {
        let recipe = RECIPE_SORT_METHODS[recipeIdx];
        RecipeSortUtil.sortMethods[recipe.id] = {
          label: recipe.label,
          sortFn: recipe.sortFn
        };
      }
    }

    return RecipeSortUtil.sortMethods;
  }

  static getRecipeSortMethodKeys() {
    let recipeSortMethods = RecipeSortUtil.getRecipeSortMethods();

    return Object.keys(recipeSortMethods);
  }
}

// XXX_jwir3: Do not import this array directly. For efficiency, we index it by
//            the 'id' field to get an associative array in
//            RecipeSortUtil.getRecipeSortMethods() using a lazy-initialization
//            approach. Use this method instead. HOWEVER, this _IS_ where you
//            add new sort functions.
const RECIPE_SORT_METHODS = [
  {
    id: 'name-az',
    label: "Name (A-Z)",
    sortFn: (recipe1, recipe2) => {
      return recipe1.name === recipe2.name ? 0 : recipe1.name.localeCompare(recipe2.name);
    }
  },
  {
    id: 'name-za',
    label: "Name (Z-A)",
    sortFn: (recipe1, recipe2) => {
      return recipe1.name === recipe2.name ? 0 : recipe2.name.localeCompare(recipe1.name);
    }
  },
  {
    id: 'last-brew-date',
    label: "Last Brew Date",
    sortFn: (recipe1, recipe2) => {
      let date1 = DateTime.fromISO(recipe1.lastBrewDate);
      let date2 = DateTime.fromISO(recipe2.lastBrewDate);
      return date1.diff(date2).toObject().milliseconds;
    }
  },
  {
    id: 'style',
    label: "Style",
    sortFn: (recipe1, recipe2) => {
      return recipe1.category === recipe2.category ? 0 : recipe1.category.localeCompare(recipe2.category);
    }
  },
  {
    id: 'ibu-lowhigh',
    label: "IBU (Low-High)",
    sortFn: (recipe1, recipe2) => {
      return recipe1.ibu - recipe2.ibu;
    }
  },
  {
    id: 'ibu-highlow',
    label: "IBU (High-Low)",
    sortFn: (recipe1, recipe2) => {
      return recipe2.ibu - recipe1.ibu;
    }
  },
  {
    id: 'color-lightdark',
    label: "Color (Light-Dark)",
    sortFn: (recipe1, recipe2) => {
      return recipe1.srm - recipe2.srm;
    }
  },
  {
    id: 'color-darklight',
    label: "Color (Dark-Light)",
    sortFn: (recipe1, recipe2) => {
      return recipe2.srm - recipe1.srm;
    }
  },
  {
    id: 'abv-highlow',
    label: "ABV (High-Low)",
    sortFn: (recipe1, recipe2) => {
      return recipe2.abv - recipe1.abv;
    }
  },
  {
    id: 'abv-lowhigh',
    label: "ABV (Low-High)",
    sortFn: (recipe1, recipe2) => {
      return recipe1.abv - recipe2.abv;
    }
  }
];
