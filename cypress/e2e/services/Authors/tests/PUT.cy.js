import * as PUTAuthors from '../requests/PUT.request.cy'
import * as GETAuthors from '../requests/GET.request.cy'
import * as POSTAuthors from '../requests/POST.request.cy'

describe('PUT', () => {
  it('Deve alterar o último nome do autor', () => {
    GETAuthors.getAuthors().then((resAll) => {
      PUTAuthors.change(resAll.body[0].id).should((resChange) => {
        expect(resChange.status).to.eq(200);
        expect(resChange.body).to.be.not.null;
        expect(resChange.body.lastName).to.eq('Brown Jr');
      })
    })
  });


  it('Deve criar e alterar um autor', () => {
    POSTAuthors.postAuthors().then((resAdd) => {
      PUTAuthors.change(resAdd.body.id).should((resChange) => {
        expect(resChange.status).to.eq(200);
        expect(resChange.body).to.be.not.null;
        expect(resChange.body.lastName).to.eq('Brown Jr');
      })
    })
  });
});