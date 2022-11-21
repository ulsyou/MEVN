<template>
    <v-container>
        <v-row no-gutter>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title>Tạo đánh giá mới</v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="form" @submit.prevent="submitForm" class="pa-5" enctype="multipart/form-data">
                        <v-text-field label="Tên phim" v-model="post.title" prepend-icon="mdi-note" :rules="rules">
                        </v-text-field>
                        <v-text-field label="Hãng" v-model="post.category" prepend-icon="mdi-view-list" :rules="rules">
                        </v-text-field>
                        <v-text-field label="Link Trailer" v-model="post.video" prepend-icon="mdi-video" :rules="rules">
                        </v-text-field>
                        <v-textarea label="Đánh giá" v-model="post.content" prepend-icon="mdi-note-plus" :rules="rules">
                        </v-textarea>
                        <v-file-input @change="selectFile" :rules="rules" show-size counter multiple label="Ảnh Poster">
                        </v-file-input>
                        <v-btn type="submit" class="mt3" color="primary">Đăng tải</v-btn>
                    </v-form>
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
            rules: [
                v => !!v || "Required",
                v => (v && v.length <= 2000) || "Max 2000 characters"
            ],
            post: {
                title: "",
                category: "",
                content: "",
                video: "",
                image: "",
            },
            image: "",
        };
    },
    methods: {
        selectFile(files) {
            this.image = files[0];
        },
        async submitForm() {
            const formData = new FormData();
            formData.append("title", this.post.title);
            formData.append("category", this.post.category);
            formData.append("content", this.post.content);
            formData.append("video", this.post.video);
            formData.append("image", this.image);
            if (this.$refs.form.validate()) {
                const response = await api.addPost(formData);
                this.$router.push({ name: "home", params: { message: response.message } });
            }
        },
    }
}
</script>