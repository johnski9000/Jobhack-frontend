export const initialData = {
    jobs: {
        'job-1':{ id: 'job-1', company: '', title: '', salary: '', description: ''},
        'job-2':{ id: 'job-2', company: 'Company Here', title: 'Drag me!', salary: '', description: ''},
        'job-3':{ id: 'job-3', company: '', title: 'test3', salary: '', description: ''},
        'job-4':{ id: 'job-4', company: '', title: 'test4', salary: '', description: ''}
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'My List',
            jobIds: ['job-2']
        },
        'column-2': {
            id: 'column-2',
            title: 'Applied',
            jobIds: []
        },
        'column-3': {
            id: 'column-3',
            title: 'Interview',
            jobIds: []
        },
        'column-4': {
            id: 'column-4',
            title: 'Accepted',
            jobIds: []
        },
        'column-5': {
            id: 'column-5',
            title: 'Rejected',
            jobIds: []
        }
    },
    columnOrder: ['column-1', "column-2", "column-3","column-4","column-5"]
}