import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#A3BCB6',
                secondary: '#FDF8F5',
                thirdiary: '#74938d'
                
            }
        },
        options: {
            customProperties: true
        },
    },

});
