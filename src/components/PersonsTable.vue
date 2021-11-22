<template>
  <div class="full-width q-pa-md">
    <q-table
      title="Persons"
      :rows="filteredList"
      :columns="columns"
      row-key="name"
      :filter="filter"
      @row-click="onRowClick"
    >
      <template v-slot:top-right>
        <q-btn-dropdown class="q-ma-md q-pa-xs" dense color="primary" :label="selectedCompany || 'Select company'">
          <q-list>
            <q-item v-for="company in companies" clickable v-close-popup @click="() => onDropDownClick(company)">
              <q-item-section>
                <q-item-label>{{ company }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>
</template>


<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'PersonsTable',
  props: {
    list: {
      type: Array,
      default: [],
      required: true
    }
  },
  data () {
    return {
      filter: '',
      selectedCompany: null,
      companies: [null],
      columns: [
        { name: 'firstName', label: 'First name', align: 'left', field: 'firstName', sortable: true },
        { name: 'lastName', label: 'Last name', align: 'left', field: 'lastName', sortable: true },
        { name: 'company', label: 'Company', align: 'center', field: 'company', sortable: true },
        { name: 'phoneNumber', label: 'Phone number', align: 'center', field: 'phoneNumber', sortable: true },
        { name: 'notes', label: 'Notes', align: 'left', field: 'notes', sortable: true }
      ]
    }
  },
  methods: {
    onRowClick (e, r, i) {
      this.$emit('onSelect', r)
    },
    onDropDownClick (company) {
      this.selectedCompany = company
    }
  },
  computed: {
    filteredList () {
      return this.list.filter(item => this.selectedCompany ? item.company === this.selectedCompany : true)
    }
  },
  watch: {
    list: {
      immediate: true,
      handler () {
        this.companies = [ null, ... new Set(this.list.map(item => item.company)) ]
      }
    }
  }
})
</script>
