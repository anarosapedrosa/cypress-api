import * as DELETEAct from '../requests/DELETE.request.cy'
import * as GETAct from '../requests/GET.request.cy';
import * as POSTAct from '../requests/POST.request.cy';

context('DELETE',() =>{
    it('Deve apagar uma atividade', () =>{
      GETAct.getActivities().then((resAll) => {
          DELETEAct.deleteAct(resAll.body[0].id).should((resDelete) => {
              expect(resDelete.status).to.eq(200);
            });
        });
    });

    it('Deve criar e apagar uma atividade', () => {
      POSTAct.addActivity().then((resAdd) => {
          DELETEAct.deleteAct(resAdd.body.id).should((resDelete) => {
            expect(resDelete.status).to.eq(200)
          })
        })
    });

});