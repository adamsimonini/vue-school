import Model from './model'

test('Creating a new Model works', () => {
    expect(new Model).toBeInstanceOf(Model)
})

test('valid model structure', () => {
    expect(new Model).toEqual(expect.objectContaining({ //toEqual doesn't work here, as it's too strong, but we can pass it another Jest method, this one being "objectContaining", which is a lighter search
        $collection: expect.any(Array),
        record: expect.any(Function),
        all: expect.any(Function),
        find: expect.any(Function),
        update: expect.any(Function),
    }))
})

describe('record', () => {
    const heroes = [{name: 'Superman'}, {name: 'Thor'}]

    test('can add data to the collection', () => {
        const model = new Model()
        model.record(heroes)
        expect(model.$collection).toEqual(heroes)
    })

    test('Gets called when data is passed to Model', () => {
        const spy = jest.spyOn(Model.prototype, 'record')
        const model = new Model(heroes)
        expect(spy).toHaveBeenCalled()
        spy.mockRestore()
    })
})

describe('all', () => {

    test('returns empty model', () => {
        const model = new Model()
        expect(model.all()).toEqual([])
    })

    test('returns model data', () => {
        const model = new Model([{ name: 'Batman' }, { name: 'Joker' }])
        expect(model.all().length).toBe(2)
    })

    test('original data stays intact', () => {
        const model = new Model([{ name: 'Batman' }])
        const data = model.all()
        data[0].name = 'Joker'
        
        expect(model.$collection[0].name).toBe('Batman')
    })

})