enum urls {
    garage = 'http://localhost:3000/garage',
    engine = 'http://localhost:3000/engine',
    winners = 'http://localhost:3000/winners',
}

export interface ICars {
    name: string;
    color: string;
    id: number;
}

export interface IWinner {
    id: number;
    wins: number;
    time: number;
}

export interface IEngineStart extends Promise<Response> {
    velocity: number;
    distance: number;
}

class Garage {
    getCar(id: number) {
        return fetch(urls.garage + `/${id}`);
    }
    getAllCars() {
        return fetch(urls.garage);
    }
    async getLimitedCars(pageN: number) {
        return fetch(urls.garage + `?_page=${pageN}&_limit=4`);
    }
    addCar(carName: string, carColor: string) {
        fetch(urls.garage, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: carName, color: carColor }),
        });
    }
    removeCar(id: number) {
        fetch(urls.garage + `/${id}`, {
            method: 'DELETE',
        });
    }
    updateCar(id: number, carName: string, carColor: string) {
        fetch(urls.garage + `/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: carName, color: carColor }),
        });
    }
}

class Engine {
    async start(id: number): Promise<IEngineStart> {
        const res = await fetch(urls.engine + `?id=${id}&status=started`, {
            method: 'PATCH',
        });
        const data = res.json() as IEngineStart;
        return data;
    }
    async stop(id: number) {
        await fetch(urls.engine + `?id=${id}&status=stopped`, {
            method: 'PATCH',
        });
    }
    async drive(id: number) {
        const res = await fetch(urls.engine + `?id=${id}&status=drive`, {
            method: 'PATCH',
        });
        return res.status;
    }
}

class Winners {
    getAllWiners() {
        return fetch(urls.winners);
    }

    async getLimitedWinners(pageN: number) {
        return await fetch(urls.winners + `?_page=${pageN}&_limit=10`);
    }

    async addWinner(id: number, time: number) {
        const res = await fetch(urls.winners, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id, wins: 1, time: time }),
        });
        return res;
    }
    async getWinner(id: number) {
        const res = await fetch(urls.winners + `/${id}`, {
            method: 'GET',
        });
        return res.json() as unknown as IWinner;
    }
    async updateWinner(id: number, wins: number, time: number) {
        const res = await fetch(urls.winners + `/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ wins: wins, time: time }),
        });
        return res as unknown as IWinner;
    }
    removeWinner(id: number) {
        fetch(urls.winners + `/${id}`, {
            method: 'DELETE',
        });
    }
}

export const garage = new Garage();
export const enigine = new Engine();
export const winners = new Winners();
