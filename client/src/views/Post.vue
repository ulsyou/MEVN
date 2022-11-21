<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="pa-4 mx-auto">
                <v-card class="pa-2">
                    <div><iframe width="920" height="475" v-bind:src="post.video" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen @click="deletePost(post._id)"></iframe></div>
                    <v-card-actions class="pb-0">
                        <v-row class="mt-1 mx-1">
                            <v-col sm="2">
                                <v-btn small outlined color="primary">
                                    {{
                                    post.category
                                    }}</v-btn>
                            </v-col>
                            <v-col sm="10" class="d-flex justify-end">
                                <v-btn color="success" text :to="{ name: 'update-post', params: { id: post._id } }">Cập
                                    nhật</v-btn>
                                <v-btn color="error" text @click="deletePost(post._id)">Xóa</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                    <v-card-subtitle class="headline">
                        <h3>{{ post.title }}</h3>
                    </v-card-subtitle>
                    <v-card-text class="grey--text">
                        <p>{{ post.content }}</p>
                        <p>{{ post.created }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import api from "../api";
export default {
    data() {
        return {
            post: {},
        };
    },
    async created() {
        const response = await api.getPostByID(this.$route.params.id);
        this.post = response;
    },
    methods: {
        async deletePost(id) {
            const response = await api.deletePost(id);
            this.$router.push({
                name: "home",
                params: { message: response.message },
            });
        },
    },
};
</script>