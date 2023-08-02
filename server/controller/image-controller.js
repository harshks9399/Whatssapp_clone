


const url = "http://localhost:8000";

export const uploadFile = async (request, response) => {
    if(!request.file) {
        return response.status(404).json('file not found');
    }

    const imageURL = `${url}/file/${request.file.filename}`;
    response.status(200).json(imageURL);
} ;