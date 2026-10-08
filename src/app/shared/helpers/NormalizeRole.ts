export class NormalizeRole {

    execute(role: string): string {
        const roleLowerCased = role.toLocaleLowerCase();
        if (roleLowerCased === 'admin') {
            return 'Admin';
        } else if (roleLowerCased === 'user') {
            return 'User';
        }
        alert(`Invalid role: ${role}`);
        throw new Error(`Invalid role: ${role}`);

    }
}