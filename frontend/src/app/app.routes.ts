import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReportComponent } from './pages/report/report.component';
import { Component } from '@angular/core';
import { PokemonGameComponent } from './pages/pokemon-game/pokemon-game.component';
import { ConfigComponent } from './pages/config/config.component';
export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'report', component: ReportComponent },
    { path: 'GamePoke', component: PokemonGameComponent },
    { path: 'Gastos', redirectTo: 'home', pathMatch: 'full' },
    { path: 'Config', component: ConfigComponent },


];