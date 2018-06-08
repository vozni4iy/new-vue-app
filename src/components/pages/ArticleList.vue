<script>
import ListTemplate from '../ListTemplate';
import ArticleTable from '../presentation/ArticleTable';
import ArticleForm from '../form/ArticleForm';
import { moduleName } from '../../store/modules/article';

export default {
  name: 'ArticleList',
  data() {
    return {
      viewComponent: ArticleTable,
      modalComponent: ArticleForm,
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
