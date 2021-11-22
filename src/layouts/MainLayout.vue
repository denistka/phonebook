<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-btn
          flat
          dense
          round
          label="Phonebook"
          icon="home"
          :to="'/'"
        />
        <person-add/>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue';
import PersonAdd from 'components/PersonAdd';

export default defineComponent({
  name: 'MainLayout',
  components: {
    PersonAdd
  }
})
</script>
