// Добавить роль 'viewer' в конец массива
{
    const roles = ['owner', 'admin', 'reviewer'];
    roles[roles.length] = 'viewer'
    for (const index in roles) {
        console.log(roles[index])
    }
}