// Вывести список ролей через for
{
    const roles = ['owner', 'admin', 'reviewer']
    for (const index in roles) {
        console.log(roles[index])
    }
}