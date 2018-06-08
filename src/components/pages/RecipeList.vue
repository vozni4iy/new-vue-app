<script>
import ListTemplate from '../ListTemplate';
import RecipeTable from '../presentation/RecipeTable';
import RecipeForm from '../form/RecipeForm';
import { moduleName } from '../../store/modules/recipe';

export default {
  name: 'RecipeList',
  data() {
    return {
      viewComponent: RecipeTable,
      modalComponent: RecipeForm,
    };
  },
  render(h) {
    const { viewComponent, modalComponent } = this;
    return (
      <ListTemplate
        viewComponent={viewComponent}
        modalComponent={modalComponent}
        moduleName={moduleName}
      />
    );
  },
};
</script>
