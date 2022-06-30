import * as GETActivities from '../requests/GET.request.cy'

describe ('GET',() => {

    it('Deve retornar uma lista de atividades', () => {
        GETActivities.getActivities().should((response) =>{
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
        });
    });

    it('Deve retornar uma atividade por ID', () => {
        GETActivities.getOneActivity(1).should((response) =>{
            expect(response.status).to.eq(200) 
            expect(response.body).to.be.not.null;
            expect(response.body.title).to.eq('Activity 1');
            expect(response.body.completed).to.eq(false);
        });
        
    })  

    it('Deve retornar 404 ao buscar por id não cadastrado', function(){
        const id = '65655458'
        GETActivities.getOneActivity(id).then(function(response){
            expect(response.status).to.eql(404)
        })
    })

    it('Deve retornar 400 ao buscar por id não válido', function(){
        const id = '656554581111111111111'
        GETActivities.getOneActivity(id).then(function(response){
            expect(response.status).to.eql(400)
        })
    })

});


