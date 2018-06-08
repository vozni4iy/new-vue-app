<script>
import ItemTemplate from '../ItemTemplate';
import ArticleDetail from '../presentation/ArticleDetail';
import ArticleForm from '../form/ArticleForm';
import { moduleName } from '../../store/modules/article';

export default {
  name: 'Article',
  data() {
    return {
      viewComponent: ArticleDetail,
      modalComponent: ArticleForm,
      parent: 'ArticleList',
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
