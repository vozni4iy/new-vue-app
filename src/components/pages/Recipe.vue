<script>
import ItemTemplate from '../ItemTemplate';
import RecipeDetail from '../presentation/RecipeDetail';
import RecipeForm from '../form/RecipeForm';
import { moduleName } from '../../store/modules/recipe';

export default {
  name: 'Recipe',
  data() {
    return {
      viewComponent: RecipeDetail,
      modalComponent: RecipeForm,
      parent: 'RecipeList',
    };
  },
  render(h) {
    const { viewComponent, modalComponent, parent } = this;
    return (
      <ItemTemplate
        viewComponent={viewComponent}
        modalComponent={modalComponent}
        moduleName={moduleName}
        parent={parent}
      />
    );
  },
};
</script>
