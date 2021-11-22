<template>
  <q-page class="flex flex-center">
    <persons-table :list="personsList" @onSelect="onSelect"/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import PersonsTable from 'components/PersonsTable'

export default defineComponent({
  name: 'PageIndex',
  components: {
    PersonsTable
  },
  mounted () {
    this.updatePersonsList()
  },
  methods: {
    ...mapActions({
      updatePersonsList: 'persons/updatePersonsList'
    }),
    onSelect (e) {
      this.$router.push(`/personDetail/${e.id}`)
    }
  },
  computed: {
    ...mapGetters({
      personsList: 'persons/getPersonsList'
    })
  }
})
</script>
