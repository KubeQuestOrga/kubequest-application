import router from '@adonisjs/core/services/router'

/**
 * Import des routes
 */
import './routes/swagger.ts'
import './routes/health.ts'

/**
 * Cette route est utilisée pour tester le fonctionnement de base de l'application.
 */
router.get('/', async (): Promise<{ hello: string }> => {
  return {
    hello: 'world',
  }
})
