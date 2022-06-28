import * as PUT from '../requests/PUT.request.cy'
import * as GETActivities from '../requests/GET.request.cy'
import * as POSTActivities from '../requests/POST.request.cy'

describe('PUT', () => {
  it('Alterando o título de uma atividade', () => {
    GETActivities.getActivities().then((resAll) => {
      PUT.changeActivity(resAll.body[0].id).should((resChange) => {
        expect(resChange.status).to.eq(200);
        expect(resChange.body).to.be.not.null;
        expect(resChange.body.title).to.eq('ActivityChange');
      })
    })
  });


  it('Criando e alterando uma atividade', () => {
    POSTActivities.addActivity().then((resAdd) => {
      PUT.changeActivity(resAdd.body.id).should((resChange) => {
        expect(resChange.status).to.eq(200);
        expect(resChange.body).to.be.not.null;
        expect(resChange.body.title).to.eq('ActivityChange');
      })
    })
  });
});