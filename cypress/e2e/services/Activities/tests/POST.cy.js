import * as POSTActivities from '../requests/POST.request.cy'

context('POST',() =>{
    it('Deve cadastrar uma atividade', () =>{
        POSTActivities.addActivity().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.title).to.eq("Leitura");       
        })
    })
})

