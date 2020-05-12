<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>
      {{ part.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PartsInfo",
  props: {
    title: { type: String },
    description: { type: String },
    partType: { type: String },
    id: { type: [Number, String], validator: value => Number.isInteger(+value) }
  },
  computed: {
    part() {
      const { title, description, partType, id } = this;
      return {
        title,
        description,
        partType,
        id
      };
    }
  }
};
</script>

<style></style>
