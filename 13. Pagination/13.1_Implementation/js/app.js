Vue.component('story', {
    template: '#template-story-raw',
    props: ['story'],
    methods: {
        upvoteStory: function(story) {
            story.upvotes++;
            this.$http.patch('http://localhost/apis/public/api/stories/'+story.id , story)
                .then(function (response) {
                console.log(response);
            });
        },
        deleteStory: function(story) {
            var index = vm.stories.indexOf(story);
            vm.stories.splice(index, 1);
            this.$http.delete('http://localhost/apis/public/api/stories/'+story.id)
                .then(function(response) {
                    console.log(response);
                });
        },
        editStory: function(story) {
            story.editing = true;
        },
        updateStory: function(story) {
            this.$http.patch('http://localhost/apis/public/api/stories/'+story.id, story);
            story.editing=false;
        },
        storeStory: function(story) {
            this.$http.post('http://localhost/apis/public/api/stories', story)
                .then(function(response) {
                    story.editing = false;
                    Vue.set(story, 'id', response.data.id);
                });
        },
        cancelStory: function(story) {
            story.editing=false;
            this.$emit('cancel');
        }
    }
});

var vm = new Vue({
    el: '#app',
    data: {
        stories: [],
        pagination: {}
    },
    methods: {
        createStory: function() {
            var newStory = {
                "writer": "",
                "plot": "",
                "upvotes": 0,
                "editing": true
            };
            vm.stories.push(newStory);
        },
        cancelStory: function() {
            this.fetchStories('http://localhost/apis/public/api/stories?page='+ this.pagination.current_page);
        },
        fetchStories: function(page_url) {
            page_url = page_url || 'http://localhost/apis/public/api/stories';
            this.$http.get(page_url)
            .then(function(response) {
                var storiesReady = response.data.data.map(function(story) {
                    story.editing = false;
                    return story;
                });
                vm.makePagination(response.data);
                Vue.set(vm, 'stories', storiesReady);
            });
        },
        makePagination: function(data) {
            var pagination = {
                current_page: data.current_page,
                last_page: data.last_page,
                next_page_url: data.next_page_url,
                prev_page_url: data.prev_page_url
            };
            Vue.set(vm, 'pagination', pagination);
        }
    },
    mounted: function() {
        this.fetchStories();
    }

});