export interface IUser {
    id: number;
    nombre: string;
    apellidos: string;
    pagado: boolean;
    email: string;
    admin: boolean;
}

export interface IFirebaseUser {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
 }
