import http from './http-common';

export default {
    getAllProfiles() {
        return http.get('/profiles');
    },

    createProfile(profile:any) {
        return http.post('/profiles', profile);
    },

    updateProfile(id:string, profile:any){
        return http.put(`/profiles/${id}`, profile);
    }, 

    deleteProfile(id:string){
        return http.delete(`/profiles/${id}`);
    }
}