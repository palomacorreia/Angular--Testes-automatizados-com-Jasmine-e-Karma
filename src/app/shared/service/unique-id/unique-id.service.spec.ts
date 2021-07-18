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
    
    
});