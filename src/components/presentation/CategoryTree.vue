<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'CategoryTree',
  created() {
    this.getList();
  },
  props: {
    handleEdit: {
      type: Function,
      required: true,
    },
    handleDelete: {
      type: Function,
      required: true,
    },
  },
  computed: {
    ...mapGetters('category', [
      'tree',
    ]),
  },
  methods: {
    displayTree(tree, level) {
      const treeView = [];
      tree.forEach((branch) => {
        if (!branch.children) {
          console.log('action error');
        } else {
          treeView.push(
            this.displayBranch(branch, level)
          );
          if (branch.children.length !== 0) {
            treeView.push(this.displayTree(branch.children, level + 1));
          }
        }
      });
      return treeView;
    },
    displayBranch(branch, level) {
      return (
        <div style={{ paddingLeft: (10 * level) + 'px' }} key={branch._id}>
          <div>{branch.title}</div>
          <button onClick={() => {
            this.$router.push({ name: 'Category', params: { id: branch._id } });
          }}>View</button>
          <button onClick={() => { this.handleEdit(branch); }}>Edit</button>
          <button onClick={() => { this.handleDelete(branch); }}>Delete</button>
        </div>
      );
    },
    ...mapActions('category', [
      'getList',
    ]),
  },
  render(h) {
    return (
      <div class="listWrapper">
        {this.displayTree(this.tree, 0)}
      </div>
    );
  }
};
</script>

<style lang="css">
</style>
