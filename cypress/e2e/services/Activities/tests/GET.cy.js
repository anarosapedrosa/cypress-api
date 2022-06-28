import * as GETActivities from '../requests/GET.request.cy'

describe ('GET',() => {

    it('Lista todas as atividades', () => {
        GETActivities.getActivities().should((response) =>{
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
        });
    });

    it('Pega uma atividade por ID', () => {
        GETActivities.getOneActivity(1).should((response) =>{
            expect(response.status).to.eq(200) 
            expect(response.body).to.be.not.null;
            expect(response.body.title).to.eq('Activity 1');
            expect(response.body.completed).to.eq(false);
        });
        
    })  

});


