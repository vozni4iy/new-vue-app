<script>
import ListTemplate from '../ListTemplate';
import CategoryTree from '../presentation/CategoryTree';
import CategoryForm from '../form/CategoryForm';
import { moduleName } from '../../store/modules/category';

export default {
  name: 'CategoryList',
  data() {
    return {
      viewComponent: CategoryTree,
      modalComponent: CategoryForm,
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
