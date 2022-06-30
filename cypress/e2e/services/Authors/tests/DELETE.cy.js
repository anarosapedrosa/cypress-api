import * as DELETEAuthor from '../requests/DELETE.request.cy'
import * as GETAuthor from '../requests/GET.request.cy';
import * as POSTAuthor from '../requests/POST.request.cy';

context('DELETE',() =>{
    it('Deve apagar um autor da lista', () =>{
      GETAuthor.getAuthors().then((resAll) => {
        DELETEAuthor.deleteAuthor(resAll.body[0].id).should((resDelete) => {
              expect(resDelete.status).to.eq(200);
            });
        });
    })

    it('Deve criar e apagar um autor da lista', () => {
      POSTAuthor.postAuthors().then((resAdd) => {
        DELETEAuthor.deleteAuthor(resAdd.body.id).should((resDelete) => {
            expect(resDelete.status).to.eq(200)
          })
        })
    })

    it('Deve retornar 400 ao apagar um autor por id não válido', function(){
      const id = '21312312312321'
      DELETEAuthor.deleteAuthor(id).should((response) => {
        expect(response.status).to.eq(400)
      })
    })

});