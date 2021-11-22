<template>
  <div>
    <div v-if="person.id === null">
      Person no found
    </div>
    <div v-else>
      <div class="row items-start q-gutter-md">
        <q-card class="my-card bg-secondary text-white">
          <q-card-section>
            <div class="text-h6">
              <q-input dense label="First name" v-model="form.firstName"/>
              <q-input dense label="Last name" v-model="form.lastName"/>
            </div>
            <div class="text-subtitle2">
              <q-input dense label="Company" v-model="form.company"/>
            </div>
          </q-card-section>

          <q-card-section>
            <q-input dense label="Phone number" v-model="form.phoneNumber"/>
          </q-card-section>

          <q-separator dark />

          <q-card-section>
            <q-input dense type="textarea" label="Notes" v-model="form.notes"/>
          </q-card-section>

          <q-card-actions>
            <q-btn flat @click="onSave">Save</q-btn>
            <q-btn flat @click="onCancel">Cancel</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>


<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'PersonEdit',
  props: {
    person: {
      type: Object,
      default: {
        id: null,
        firstName: null,
        lastName: null,
        company: null,
        phoneNumber: null,
        notes: null
      },
      required: true
    }
  },
  data () {
    return {
      form: {}
    }
  },
  methods: {
    onSave () {
      this.$emit('save', this.form)
    },
    onCancel () {
      this.$emit('cancel')
    }
  },
  watch: {
    'person': {
      immediate: true,
      handler () {
        this.form = { ... this.person }
      }
    }
  }
})
</script>
