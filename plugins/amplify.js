import Vue from 'vue'
import { Amplify } from 'aws-amplify'
import awsExports from '../aws-exports'
Amplify.configure({ ...awsExports, ssr: true })
Vue.use(Amplify)
