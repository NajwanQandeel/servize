# Generated by Django 3.1.4 on 2020-12-12 13:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('ServiceProvider', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Reviews',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stars', models.IntegerField()),
                ('servicProvider', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ServiceProvider.serviceprovider')),
            ],
        ),
    ]
