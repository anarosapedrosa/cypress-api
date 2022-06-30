import * as POSTAuthors from '../requests/POST.request.cy'

context('POST',() =>{
    it('Deve cadastrar um autor', () =>{
        POSTAuthors.postAuthors().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.firstName).to.eq("Dan");       
            expect(response.body.lastName).to.eq("Brown");  
        })
    })
})

context('Cenários que deve retornar com erro',() =>{

    const author1 = {
        id: 'abc',
        idBook: '1',
        firstName: 'x',
        lastName: 'xxx'
    }

    it('Deve retornar 400 ao tentar cadastrar com id não válido', function(){
        POSTAuthors.postAuthorsWithError(author1).then(function(response){
            expect(response.status).to.eql(400)
        })
    })

    const author2 = {
        id: '1',
        idBook: 'abc',
        firstName: 'x',
        lastName: 'xxx'
    }

    it('Deve retornar 400 ao tentar cadastrar com idBook não válido', function(){
        POSTAuthors.postAuthorsWithError(author2).then(function(response){
            expect(response.status).to.eql(400)
        })
    })
})

