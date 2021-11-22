<template>
  <div>
    <q-btn
      flat
      dense
      round
      icon="add"
      aria-label="Add item"
      @click="dialog = true"
    />
    <q-dialog v-model="dialog" persistent>
      <person-edit :person="person" @save="onSave" @cancel="onCancel"/>
    </q-dialog>
  </div>
</template>


<script>
import { defineComponent } from 'vue';
import { uid } from 'quasar';
import { mapActions } from 'vuex';
import PersonEdit from 'components/PersonEdit';
import {addPerson} from "src/store/persons/actions";
export default defineComponent({
  name: 'PersonAdd',
  components: {
    PersonEdit
  },
  data () {
    return {
      dialog: false,
      person: {
        id: uid(),
        firstName: 'First name',
        lastName:  'Last name',
        company:  'Company',
        phoneNumber: 'Phone number',
        notes: 'Notes'
      }
    }
  },
  methods: {
    ...mapActions({
      addPerson: 'persons/addPerson'
    }),
    onSave (e) {
      this.dialog = false
      this.addPerson(e)
      this.$q.notify({
        type: 'positive',
        message: `Person ${e.firstName} ${e.lastName} added successfully`
      })
    },
    onCancel () {
      this.dialog = false
    }
  }
})
</script>
