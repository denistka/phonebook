<template>
  <q-page class="flex flex-center">
    <person-edit :person="person" @save="onSave" @cancel="onCancel"/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import PersonEdit from 'components/PersonEdit';

export default defineComponent({
  name: 'PagePersonDetail',
  components: {
    PersonEdit
  },
  methods: {
    ...mapActions({
      updatePerson: 'persons/updatePerson',
      editPerson: 'persons/editPerson'
    }),
    onSave (e) {
      this.editPerson(e)
      this.$q.notify({
        type: 'positive',
        message: `Person ${e.firstName} ${e.lastName} updated successfully`
      })
      this.$router.push('/')
    },
    onCancel (e) {
      this.$router.push('/')
    }
  },
  computed: {
    ...mapGetters({
      person: 'persons/getPerson'
    })
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler () {
        this.updatePerson(this.$route.params.id)
      }
    }
  }
})
</script>
