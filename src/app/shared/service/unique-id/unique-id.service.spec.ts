/*  MODELO
 describe('O Artefato que queremos testar', () => {
    it('Primeira Condição que queremos testar> __________should___________when_____
    = alguma coisa deve fazer algo quando determinadas condições estiverem presentes', () => {
        
    });
    
    
}); 
*/

import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () => {
    it(`#${UniqueIdService.prototype.generatedUniqueIdwithPrefix.name} should generate id when called prefix`, () => {
        const service = new UniqueIdService();
        const id = service.generatedUniqueIdwithPrefix('app');
        expect(id.startsWith('app-')).toBeTrue();
        
    });
    
    it(`#${UniqueIdService.prototype.generatedUniqueIdwithPrefix.name} should not generate duplicate ids when called`, () => {
        const service = new UniqueIdService();
        const ids = new Set();
        for(let i =0; i<50; i++){
            ids.add(service.generatedUniqueIdwithPrefix('app'));
        }
        expect(ids.size).toBe(50);
    });   
    
    it(`#${UniqueIdService.prototype.getNumbergeneratedUniqueIds.name} should return the number of generatedIds when called`, () => {
        const service = new UniqueIdService();
        service.generatedUniqueIdwithPrefix('app');
        service.generatedUniqueIdwithPrefix('app');
        expect(service.getNumbergeneratedUniqueIds()).toBe(2);
    });

});